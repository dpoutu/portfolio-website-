document.addEventListener('DOMContentLoaded', () => {
    const buttongroup = [".tab_button1", ".tab_button2", ".tab_button3"];
    
   
    buttongroup.forEach(selector => {
      const buttons = document.querySelectorAll(selector)
      buttons.forEach(button => {
      button.addEventListener('click', () => {
        const url = button.getAttribute('data-url');
        if (url) {
          window.location.href = url;
          }
      });
    });
  });
});

  function myFunction(btn) {
    var x = document.getElementById("nav-links");
    x.classList.toggle("show");
    // Accessibility: toggle aria-expanded
    if (btn) {
      btn.setAttribute("aria-expanded", x.classList.contains("show") ? "true" : "false");
    }
  }
// mouse scroll effect
const imgs = document.querySelectorAll('img');

imgs.forEach(img => {
  img.addEventListener('mousemove', (e) => {
    // Get mouse position relative to the image
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.8) * 20; // max 10deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.8) * 20;

    img.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  });

  img.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.getElementById('primary-links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.hasAttribute('hidden');
    if (open) {
      links.removeAttribute('hidden');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      links.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // close when clicking outside (mobile)
  document.addEventListener('click', (e) => {
    if (!links.contains(e.target) && !toggle.contains(e.target) && !links.hasAttribute('hidden')) {
      links.setAttribute('hidden', '');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
});
// Select all elements with the class 'fade-in'
const faders = document.querySelectorAll('.fade-in');

// Options for the IntersectionObserver
// threshold: 0.2 means the callback will trigger when 20% of the element is visible
const appearOptions = {
  threshold: 0.2
};

// Create a new IntersectionObserver
// entries: array of observed elements and their intersection info
// observer: the observer instance itself
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // If the element is at least 20% visible in the viewport
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add class to trigger fade-in
    } else {
      entry.target.classList.remove('visible'); // Remove class to fade out when scrolling away
    }
  });
}, appearOptions);

// Observe each element with the 'fade-in' class
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});




// Split words into spans
const introText = document.getElementById('intro-text');
const words = introText.innerText.split(' ');
introText.innerHTML = words.map(word => `<span class="intro-word">${word}</span>`).join(' ');

// Animate each word with a slight delay
const spans = document.querySelectorAll('.intro-word');
spans.forEach((span, index) => {
  setTimeout(() => {
    span.classList.add('zoom');
  }, index * 150); // 150ms between each word
});


function runSandboxCode() {
  const code = document.getElementById('sandbox-code').value;
  let output = '';
  try {
    output = eval(code);
    if (output === undefined) output = '(No output)';
  } catch (e) {
    output = 'Error: ' + e.message;
  }
  document.getElementById('sandbox-output').textContent = output;
}

function toggleFullscreenIframe(id) {
  const iframe = document.getElementById(id);
  if (!iframe) return;
  let closeBtn = document.getElementById('iframe-close-btn');
  if (iframe.classList.contains('fullscreen-iframe')) {
    iframe.classList.remove('fullscreen-iframe');
    iframe.style.position = '';
    iframe.style.left = '';
    iframe.style.top = '';
    iframe.style.transform = '';
    iframe.style.zIndex = '';
    iframe.style.width = '400px';
    iframe.style.height = '300px';
    iframe.style.maxWidth = '';
    iframe.style.maxHeight = '';
    iframe.style.background = '';
    iframe.style.border = '1px solid #ccc';
    iframe.style.borderRadius = '8px';
    iframe.setAttribute('width', '400');
    iframe.setAttribute('height', '300');
    if (closeBtn) closeBtn.remove();
  } else {
    iframe.classList.add('fullscreen-iframe');
    iframe.style.position = 'fixed';
    iframe.style.left = '50%';
    iframe.style.top = '5vh';
    iframe.style.transform = 'translateX(-50%)';
    iframe.style.zIndex = '9999';
    iframe.style.width = '90vw';
    iframe.style.height = '80vh';
    iframe.style.maxWidth = '1200px';
    iframe.style.maxHeight = '80vh';
    iframe.style.background = '#fff';
    iframe.style.border = '2px solid #333';
    iframe.style.borderRadius = '12px';
    iframe.setAttribute('width', '');
    iframe.setAttribute('height', '');
    // Add close button
    closeBtn = document.createElement('button');
    closeBtn.id = 'iframe-close-btn';
    closeBtn.textContent = 'Close';
    closeBtn.style.position = 'fixed';
    closeBtn.style.top = '3vh';
    closeBtn.style.right = '3vw';
    closeBtn.style.zIndex = '10000';
    closeBtn.style.padding = '0.5rem 1.5rem';
    closeBtn.style.borderRadius = '8px';
    closeBtn.style.background = '#4f46e5';
    closeBtn.style.color = '#fff';
    closeBtn.style.border = 'none';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = function() { toggleFullscreenIframe(id); };
    document.body.appendChild(closeBtn);
  }
}
