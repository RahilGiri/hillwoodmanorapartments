document.addEventListener('DOMContentLoaded', () => {
  // Inject Widget HTML
  const widgetHTML = `
    <div id="hw-widget-container">
      
      <!-- The Stacked Buttons (Menu) -->
      <div id="hw-widget-menu" class="hw-stacked-menu hw-hidden">
        <button class="hw-pill-btn" data-target="hw-view-email">
          <div class="hw-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </div>
          <div class="hw-btn-text">
            <strong>Email an agent</strong>
            <span>Get in touch with our team</span>
          </div>
          <div class="hw-arrow">&rsaquo;</div>
        </button>
        
        <button class="hw-pill-btn" data-target="hw-view-tour">
          <div class="hw-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          </div>
          <div class="hw-btn-text">
            <strong>Book a tour</strong>
            <span>See your future home in person</span>
          </div>
          <div class="hw-arrow">&rsaquo;</div>
        </button>
        
        <button class="hw-pill-btn" data-target="hw-view-chat">
          <div class="hw-icon-wrapper">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
          </div>
          <div class="hw-btn-text">
            <strong>Chat with us</strong>
            <span>Get an instant reply, 24/7</span>
          </div>
          <div class="hw-arrow">&rsaquo;</div>
        </button>
      </div>

      <!-- The Panels -->
      <div id="hw-widget-panel" class="hw-hidden">
        
        <!-- View: Email Form -->
        <div id="hw-view-email" class="hw-view hw-hidden">
          <div class="hw-panel-header" style="justify-content: space-between;">
            <h4 style="font-size: 0.95rem; font-weight: 700;">Enter your details and we will reach out to you ASAP</h4>
            <button class="hw-close-btn">&times;</button>
          </div>
          <div class="hw-panel-body">
            <form id="hw-email-form" action="YOUR_EMAIL_APPS_SCRIPT_URL" method="POST">
              <input type="text" placeholder="First Name" required class="hw-input">
              <input type="text" placeholder="Last Name" required class="hw-input">
              <input type="email" placeholder="Email" required class="hw-input">
              <input type="tel" placeholder="Mobile Number" required class="hw-input">
              <select required class="hw-input">
                <option value="" disabled selected>Desired Move in Date</option>
                <option value="ASAP">ASAP</option>
                <option value="1 month">Within 1 month</option>
                <option value="2 months">1-2 months</option>
                <option value="Just looking">Just looking</option>
              </select>
              <p class="hw-privacy-text">By clicking below, you agree we may pass along your info to this property or the property's affiliates can email, call, text, or autodial you to follow up and for any purpose. Consent is not a condition for services. Message and data rates may apply.</p>
              <button type="submit" class="hw-submit-btn">Submit</button>
              <p style="text-align: center; margin-top: 15px; font-size: 0.75rem;"><a href="#" style="color: #888; text-decoration: underline;">Privacy Policy</a></p>
            </form>
            <div id="hw-email-success" class="hw-hidden hw-panel-body" style="text-align: center; padding: 40px 20px;">
              <h4 style="margin-bottom: 10px; font-size: 1.2rem; color: #0f4c5c;">Thank You!</h4>
              <p style="font-size: 0.95rem; color: #555;">Thank you for applying, our agent will contact you shortly.</p>
              <button class="hw-close-btn-full" style="margin-top: 20px;">Close</button>
            </div>
          </div>
        </div>
        
        <!-- View: Book a Tour -->
        <div id="hw-view-tour" class="hw-view hw-hidden">
          
          <!-- Step 1: Calendar -->
          <div id="hw-tour-step-1">
            <div class="hw-panel-header" style="justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <button class="hw-back-to-menu-btn" style="margin-right: 8px;">&lsaquo;</button>
                <h4 style="font-size: 0.95rem; font-weight: 700;">Select a Date</h4>
              </div>
              <button class="hw-close-btn">&times;</button>
            </div>
            <div class="hw-panel-body">
              <div class="hw-calendar-header">
                <span id="hw-cal-month" style="font-weight: 700;">June, 2026</span>
                <div>
                  <button id="hw-cal-prev" type="button" style="margin-right: 10px;">&lsaquo;</button>
                  <button id="hw-cal-next" type="button">&rsaquo;</button>
                </div>
              </div>
              <div class="hw-calendar-days">
                <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
              </div>
              <div id="hw-calendar-grid" class="hw-calendar-grid">
                <!-- Dynamically generated -->
              </div>
              
              <div id="hw-time-slots" class="hw-hidden" style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eaeaea;">
                <h5 style="margin-bottom: 15px; font-size: 0.95rem; font-weight: 700;">Select a Time</h5>
                <div class="hw-times-grid">
                  <button class="hw-time-btn">11:00 AM</button>
                  <button class="hw-time-btn">12:00 PM</button>
                  <button class="hw-time-btn">1:00 PM</button>
                  <button class="hw-time-btn">2:00 PM</button>
                  <button class="hw-time-btn">4:00 PM</button>
                  <button class="hw-time-btn">5:00 PM</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Form Details -->
          <div id="hw-tour-step-2" class="hw-hidden">
            <div class="hw-panel-header" style="justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <button class="hw-back-to-cal-btn" style="margin-right: 8px;">&lsaquo;</button>
                <h4 style="font-size: 0.95rem; font-weight: 700;">We need a few more details...</h4>
              </div>
              <button class="hw-close-btn">&times;</button>
            </div>
            <div class="hw-panel-body" style="padding-top: 10px;">
              <div style="text-align: center; margin-bottom: 15px; padding: 15px; background: #f4f6f8; border-radius: 8px;">
                <strong style="display: block; font-size: 0.8rem; color: #0f4c5c; letter-spacing: 0.5px;">TOURING ON</strong>
                <span id="hw-tour-datetime" style="font-weight: 700; color: #0f4c5c; font-size: 0.95rem;"></span>
              </div>
              <form id="hw-tour-form" action="YOUR_TOUR_APPS_SCRIPT_URL" method="POST">
                <input type="text" placeholder="First Name" required class="hw-input">
                <input type="text" placeholder="Last Name" required class="hw-input">
                <input type="email" placeholder="Email" required class="hw-input">
                <input type="tel" placeholder="Mobile Number" required class="hw-input">
                <select required class="hw-input">
                  <option value="" disabled selected>Desired Move in Date</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1 month">Within 1 month</option>
                  <option value="2 months">1-2 months</option>
                  <option value="Just looking">Just looking</option>
                </select>
                <select required class="hw-input">
                  <option value="" disabled selected>Desired Bedrooms</option>
                  <option value="1 Bedroom">1 Bedroom</option>
                  <option value="2 Bedrooms">2 Bedrooms</option>
                  <option value="3 Bedrooms">3 Bedrooms</option>
                </select>
                <p class="hw-privacy-text">By clicking below, you agree we may pass along your info to this property or the property's affiliates can email, call, text, or autodial you to follow up and for any purpose. Consent is not a condition for services. Message and data rates may apply.</p>
                <button type="submit" class="hw-submit-btn">Submit</button>
                <p style="text-align: center; margin-top: 15px; font-size: 0.75rem;"><a href="#" style="color: #888; text-decoration: underline;">Privacy Policy</a></p>
              </form>
            </div>
          </div>

          <!-- Step 3: Success -->
          <div id="hw-tour-success" class="hw-hidden hw-panel-body" style="text-align: center; padding: 40px 20px;">
            <h4 style="margin-bottom: 10px; font-size: 1.2rem; color: #0f4c5c;">Thank You!</h4>
            <p style="font-size: 0.95rem; color: #555;">Thank you for applying, our agent will contact you shortly.</p>
            <button class="hw-close-btn-full" style="margin-top: 20px;">Close</button>
          </div>
        </div>
        
        <!-- View: Chatbot -->
        <div id="hw-view-chat" class="hw-view hw-hidden">
          <div class="hw-panel-header" style="justify-content: space-between; border-bottom: none; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <h4 style="font-size: 0.95rem; font-weight: 700;">Hillwood Manor Apartments</h4>
            <button class="hw-close-btn">&times;</button>
          </div>
          <div id="hw-chat-history" class="hw-chat-history">
            <div class="hw-chat-msg hw-bot">
              <div class="hw-msg-bubble">Hi! I can help you with anything you need including tour scheduling, pricing & availability, and property information.<br><br>How can I help you today?</div>
            </div>
          </div>
          <div class="hw-chat-input-area">
            <form id="hw-chat-form" style="position: relative; display: flex; align-items: center;">
              <input type="text" id="hw-chat-input" placeholder="Start asking your questions here..." autocomplete="off">
              <button type="submit" class="hw-chat-send">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
            <p style="text-align: center; margin-top: 10px; font-size: 0.65rem;"><a href="#" style="color: #aaa; text-decoration: underline;">Privacy Policy</a></p>
          </div>
        </div>
        
      </div>
      
      <!-- The Floating Action Button (Always visible) -->
      <button id="hw-widget-fab" aria-label="Toggle support menu">
        <svg class="hw-fab-icon-open" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        <svg class="hw-fab-icon-close hw-hidden" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', widgetHTML);

  // Widget Elements
  const container = document.getElementById('hw-widget-container');
  const fab = document.getElementById('hw-widget-fab');
  const iconOpen = fab.querySelector('.hw-fab-icon-open');
  const iconClose = fab.querySelector('.hw-fab-icon-close');
  
  const menu = document.getElementById('hw-widget-menu');
  const panel = document.getElementById('hw-widget-panel');
  const views = document.querySelectorAll('.hw-view');
  
  // Open/Close FAB toggles the stacked menu
  fab.addEventListener('click', () => {
    // If a panel is open, close the panel and show menu
    if (!panel.classList.contains('hw-hidden')) {
      panel.classList.add('hw-hidden');
      menu.classList.remove('hw-hidden');
      iconOpen.classList.remove('hw-hidden');
      iconClose.classList.add('hw-hidden');
    } else {
      // Toggle menu
      menu.classList.toggle('hw-hidden');
      iconOpen.classList.toggle('hw-hidden');
      iconClose.classList.toggle('hw-hidden');
    }
  });

  // Keep menu always visible initially (as per user request: "stick there permanently")
  // So we remove hidden from menu initially, and set FAB to close state
  menu.classList.remove('hw-hidden');
  iconOpen.classList.add('hw-hidden');
  iconClose.classList.remove('hw-hidden');

  // View Navigation
  function showView(viewId) {
    // Hide menu, show panel
    menu.classList.add('hw-hidden');
    panel.classList.remove('hw-hidden');
    
    iconOpen.classList.add('hw-hidden');
    iconClose.classList.remove('hw-hidden');

    views.forEach(v => {
      if (v.id === viewId) {
        v.classList.remove('hw-hidden');
        v.classList.add('hw-active');
      } else {
        v.classList.add('hw-hidden');
        v.classList.remove('hw-active');
      }
    });
  }

  // Click on a pill button
  document.querySelectorAll('.hw-pill-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showView(btn.getAttribute('data-target'));
      if (btn.getAttribute('data-target') === 'hw-view-chat') {
         setTimeout(() => document.getElementById('hw-chat-input').focus(), 100);
      }
    });
  });

  // Close buttons inside panel
  document.querySelectorAll('.hw-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.classList.add('hw-hidden');
      // Go back to showing menu
      menu.classList.remove('hw-hidden');
    });
  });
  
  document.querySelectorAll('.hw-close-btn-full').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.classList.add('hw-hidden');
      menu.classList.remove('hw-hidden');
    });
  });

  // Back button in Tour Step 1 (Back to menu)
  document.querySelectorAll('.hw-back-to-menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      panel.classList.add('hw-hidden');
      menu.classList.remove('hw-hidden');
    });
  });

  // 1. Email Form Logic
  const emailForm = document.getElementById('hw-email-form');
  const emailSuccess = document.getElementById('hw-email-success');
  const emailSubmitBtn = emailForm.querySelector('.hw-submit-btn');

  emailForm.addEventListener('input', () => {
    if (emailForm.checkValidity()) {
      emailSubmitBtn.classList.add('hw-active-btn');
    } else {
      emailSubmitBtn.classList.remove('hw-active-btn');
    }
  });

  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailForm.checkValidity()) return;
    emailForm.classList.add('hw-hidden');
    emailSuccess.classList.remove('hw-hidden');
  });

  // 2. Book a Tour Logic
  const calGrid = document.getElementById('hw-calendar-grid');
  const timeSlots = document.getElementById('hw-time-slots');
  const step1 = document.getElementById('hw-tour-step-1');
  const step2 = document.getElementById('hw-tour-step-2');
  const step3 = document.getElementById('hw-tour-success');
  const datetimeDisplay = document.getElementById('hw-tour-datetime');
  const tourForm = document.getElementById('hw-tour-form');
  let selectedDate = null;
  
  // Render dummy month for June 2026
  let html = '';
  for(let i=0; i<31; i++){
    let day = i+1;
    let classes = 'hw-cal-day';
    if(day < 26) classes += ' disabled';
    html += `<button type="button" class="${classes}">${day < 10 ? '0'+day : day}</button>`;
  }
  calGrid.innerHTML = html;

  document.querySelectorAll('.hw-cal-day:not(.disabled)').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.hw-cal-day').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedDate = `6/${parseInt(btn.textContent)}/2026`;
      timeSlots.classList.remove('hw-hidden');
    });
  });

  document.querySelectorAll('.hw-time-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const time = btn.textContent;
      datetimeDisplay.textContent = `${selectedDate} at ${time}`;
      step1.classList.add('hw-hidden');
      step2.classList.remove('hw-hidden');
    });
  });

  document.querySelector('.hw-back-to-cal-btn').addEventListener('click', (e) => {
    e.preventDefault();
    step2.classList.add('hw-hidden');
    step1.classList.remove('hw-hidden');
  });

  const tourSubmitBtn = tourForm.querySelector('.hw-submit-btn');
  tourForm.addEventListener('input', () => {
    if (tourForm.checkValidity()) {
      tourSubmitBtn.classList.add('hw-active-btn');
    } else {
      tourSubmitBtn.classList.remove('hw-active-btn');
    }
  });

  tourForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!tourForm.checkValidity()) return;
    step2.classList.add('hw-hidden');
    step3.classList.remove('hw-hidden');
  });

  // 3. Chatbot Logic
  const chatForm = document.getElementById('hw-chat-form');
  const chatInput = document.getElementById('hw-chat-input');
  const chatHistory = document.getElementById('hw-chat-history');

  function addMessage(text, isUser = false) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `hw-chat-msg ${isUser ? 'hw-user' : 'hw-bot'}`;
    msgDiv.innerHTML = `<div class="hw-msg-bubble">${text}</div>`;
    chatHistory.appendChild(msgDiv);
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function getBotResponse(input) {
    const queryStr = input.toLowerCase().trim();
    
    // Greeting Checks
    if (queryStr.match(/^(hi|hello|hey|greetings|howdy)( there)?$/)) return "Hello! How can I help you today?";
    if (queryStr.match(/^(bye|goodbye|cya|see ya)$/)) return "Goodbye! Feel free to reach out if you have any more questions.";
    if (queryStr.match(/^(thanks|thank you|thanks a lot)$/)) return "You're welcome! Let me know if you need anything else.";
    if (queryStr.match(/^(how are you|how are you doing)$/)) return "I'm just a bot, but I'm doing great! How can I assist you with Hillwood Manor?";

    const query = queryStr.replace(/[^\w\s]/g, '');
    const words = query.split(' ').filter(w => w.length > 2);
    
    if (words.length === 0) return "Please ask a question so I can assist you!";

    let bestMatch = null;
    let maxScore = 0;

    if (typeof chatbotData !== 'undefined') {
      for (const item of chatbotData) {
        const qWords = item.q.toLowerCase().replace(/[^\w\s]/g, '').split(' ');
        let score = 0;
        for (const w of words) {
          if (qWords.includes(w)) score++;
        }
        if (item.q.toLowerCase().includes(query)) score += 5;

        if (score > maxScore) {
          maxScore = score;
          bestMatch = item.a;
        }
      }
    }

    if (maxScore > 0 && bestMatch) {
      return bestMatch;
    }
    return "I'm not sure I understand. Could you rephrase your question, or contact our leasing office directly at 731-599-1049?";
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    
    addMessage(text, true);
    chatInput.value = '';
    
    setTimeout(() => {
      const response = getBotResponse(text);
      addMessage(response, false);
    }, 600);
  });
});
