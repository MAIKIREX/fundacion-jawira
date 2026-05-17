const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Change toggleActions to play reverse play reverse
  if (content.includes("toggleActions: 'play none none none'")) {
    content = content.replace(/toggleActions: 'play none none none'/g, "toggleActions: 'play reverse play reverse'");
    changed = true;
  }

  // Update ScrollTrigger.batch logic
  if (content.includes("once: true")) {
    // For batch we want it to reset on leave
    // We'll replace once: true with onLeave: (elements) => gsap.set(elements, { autoAlpha: 0, overwrite: true }), onLeaveBack: (elements) => gsap.set(elements, { autoAlpha: 0, overwrite: true })
    // Actually, simpler: replace once: true with once: false, and we let the user see it trigger. Wait, batch only triggers onEnter by default.
    // Let's just do once: false. It won't reset the elements though.
    // Let's just remove once: true and add onLeaveBack and onLeave to reset it.
    // Because writing a regex for the batch is complex, let's just do it manually for the 3 batch files or just replace once: true with once: false.
    changed = false;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

walkDir('components/areas');
walkDir('components/fundacion');
