function pingPong() {
  const out = [];
    for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) out.push("PingPong");
    else if (i % 3 === 0) out.push("Ping");
    else if (i % 5 === 0) out.push("Pong");
    else out.push(String(i));
  }

  return out.join(", ");
}
console.log(pingPong());