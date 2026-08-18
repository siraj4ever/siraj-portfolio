"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const PARTICLE_COUNT = 60;
const CONNECTION_DISTANCE = 150;
const BINARY_CHARS = ["0", "1"];
const TECH_SYMBOLS = ["</>", "{}", "[]", "//", "=>", "&&", "||", "AI", "ML"];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

export default function AIBackground() {
  const canvasRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const isDark = resolvedTheme === "dark";

    const nodeColor = isDark ? "rgba(99,179,237,0.85)" : "rgba(49,130,206,0.75)";
    const lineColor = isDark ? "rgba(99,179,237," : "rgba(49,130,206,";
    const glowColor = isDark ? "#63b3ed" : "#3182ce";
    const binaryColor = isDark ? "rgba(154,230,180," : "rgba(56,161,105,";
    const gridColor = isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)";
    const pulseColor = isDark ? "rgba(236,201,75,0.6)" : "rgba(214,158,46,0.5)";

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: randomBetween(-0.35, 0.35),
      vy: randomBetween(-0.35, 0.35),
      radius: randomBetween(2, 4.5),
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: randomBetween(0.02, 0.05),
    }));

    const floaters = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: randomBetween(-0.2, -0.5),
      opacity: randomBetween(0.1, 0.4),
      char:
        Math.random() < 0.6
          ? BINARY_CHARS[Math.floor(Math.random() * BINARY_CHARS.length)]
          : TECH_SYMBOLS[Math.floor(Math.random() * TECH_SYMBOLS.length)],
      fontSize: randomBetween(9, 14),
    }));

    const packets = [];
    function spawnPacket(p1, p2) {
      packets.push({ p1, p2, t: 0, speed: randomBetween(0.004, 0.009) });
    }

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 0.5;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DISTANCE) {
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.5;
            ctx.strokeStyle = lineColor + alpha.toFixed(3) + ")";
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            if (frame % 90 === 0 && Math.random() < 0.03) {
              spawnPacket(particles[i], particles[j]);
            }
          }
        }
      }

      particles.forEach((p) => {
        const pulseRadius = p.radius + Math.sin(p.pulse) * 1.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius + 3, 0, Math.PI * 2);
        ctx.strokeStyle = isDark ? "rgba(99,179,237,0.15)" : "rgba(49,130,206,0.12)";
        ctx.lineWidth = 1;
        ctx.stroke();

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulseRadius);
        grad.addColorStop(0, glowColor);
        grad.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulseRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      for (let k = packets.length - 1; k >= 0; k--) {
        const pk = packets[k];
        pk.t += pk.speed;
        if (pk.t >= 1) { packets.splice(k, 1); continue; }
        const px = pk.p1.x + (pk.p2.x - pk.p1.x) * pk.t;
        const py = pk.p1.y + (pk.p2.y - pk.p1.y) * pk.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = pulseColor;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(236,201,75,0.15)" : "rgba(214,158,46,0.12)";
        ctx.fill();
      }

      floaters.forEach((f) => {
        f.y += f.vy;
        if (f.y < -20) {
          f.y = canvas.height + 10;
          f.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = binaryColor + f.opacity.toFixed(2) + ")";
        ctx.font = f.fontSize + "px 'Courier New', monospace";
        ctx.fillText(f.char, f.x, f.y);
      });

      frame++;
      animRef.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
