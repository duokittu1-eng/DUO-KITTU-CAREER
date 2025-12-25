// Global state
let userData = {
    name: '',
    dob: '',
    qualification: '',
    degreeType: '',
    branch: '',
    industry: ''
};

// Career domains data
const careerDomains = {
    ECE: {
        Software: [
            { name: 'Embedded Systems Developer', details: getDomainDetails('Embedded Systems Developer') },
            { name: 'VLSI Design Engineer', details: getDomainDetails('VLSI Design Engineer') },
            { name: 'IoT Developer', details: getDomainDetails('IoT Developer') },
            { name: 'Signal Processing Engineer', details: getDomainDetails('Signal Processing Engineer') },
            { name: 'Firmware Developer', details: getDomainDetails('Firmware Developer') },
            { name: 'RF Engineer', details: getDomainDetails('RF Engineer') },
            { name: 'Control Systems Engineer', details: getDomainDetails('Control Systems Engineer') }
        ],
        Hardware: [
            { name: 'PCB Design Engineer', details: getDomainDetails('PCB Design Engineer') },
            { name: 'Hardware Testing Engineer', details: getDomainDetails('Hardware Testing Engineer') },
            { name: 'ASIC Design Engineer', details: getDomainDetails('ASIC Design Engineer') }
        ]
    },
    EEE: {
        Software: [
            { name: 'Power Systems Software', details: getDomainDetails('Power Systems Software') },
            { name: 'Automation Engineer', details: getDomainDetails('Automation Engineer') }
        ],
        Hardware: [
            { name: 'Power Electronics Engineer', details: getDomainDetails('Power Electronics Engineer') },
            { name: 'Control Panel Designer', details: getDomainDetails('Control Panel Designer') },
            { name: 'Electrical Design Engineer', details: getDomainDetails('Electrical Design Engineer') }
        ]
    },
    CSE: {
        Software: [
            { name: 'Full Stack Developer', details: getDomainDetails('Full Stack Developer') },
            { name: 'Data Scientist', details: getDomainDetails('Data Scientist') },
            { name: 'DevOps Engineer', details: getDomainDetails('DevOps Engineer') },
            { name: 'Cloud Architect', details: getDomainDetails('Cloud Architect') },
            { name: 'Blockchain Developer', details: getDomainDetails('Blockchain Developer') },
            { name: 'Mobile App Developer', details: getDomainDetails('Mobile App Developer') },
            { name: 'Cybersecurity Analyst', details: getDomainDetails('Cybersecurity Analyst') }
        ]
    },
    'CYBER SECURITY': {
        Software: [
            { name: 'Penetration Tester', details: getDomainDetails('Penetration Tester') },
            { name: 'Security Analyst', details: getDomainDetails('Security Analyst') },
            { name: 'Ethical Hacker', details: getDomainDetails('Ethical Hacker') },
            { name: 'Security Architect', details: getDomainDetails('Security Architect') }
        ]
    },
    CIVIL: {
        Software: [
            { name: 'BIM Specialist', details: getDomainDetails('BIM Specialist') },
            { name: 'Project Management Software', details: getDomainDetails('Project Management Software') }
        ],
        Hardware: [
            { name: 'Structural Engineer', details: getDomainDetails('Structural Engineer') },
            { name: 'Geotechnical Engineer', details: getDomainDetails('Geotechnical Engineer') },
            { name: 'Construction Manager', details: getDomainDetails('Construction Manager') }
        ]
    },
    MECHANICAL: {
        Software: [
            { name: 'CAD/CAM Engineer', details: getDomainDetails('CAD/CAM Engineer') },
            { name: 'Simulation Engineer', details: getDomainDetails('Simulation Engineer') }
        ],
        Hardware: [
            { name: 'Design Engineer', details: getDomainDetails('Design Engineer') },
            { name: 'Manufacturing Engineer', details: getDomainDetails('Manufacturing Engineer') },
            { name: 'Automotive Engineer', details: getDomainDetails('Automotive Engineer') }
        ]
    },
    IT: {
        Software: [
            { name: 'Network Engineer', details: getDomainDetails('Network Engineer') },
            { name: 'System Administrator', details: getDomainDetails('System Administrator') },
            { name: 'Database Administrator', details: getDomainDetails('Database Administrator') }
        ]
    },
    'AI&DS': {
        Software: [
            { name: 'Machine Learning Engineer', details: getDomainDetails('Machine Learning Engineer') },
            { name: 'AI Research Scientist', details: getDomainDetails('AI Research Scientist') },
            { name: 'Data Engineer', details: getDomainDetails('Data Engineer') },
            { name: 'NLP Engineer', details: getDomainDetails('NLP Engineer') },
            { name: 'Computer Vision Engineer', details: getDomainDetails('Computer Vision Engineer') }
        ]
    }
};

// Sample domain details generator
function getDomainDetails(domainName) {
    const templates = {
        'Embedded Systems Developer': {
            skills: ['C/C++ Programming', 'Microcontrollers (ARM, AVR)', 'RTOS', 'PCB Design', 'Communication Protocols (I2C, SPI, UART)'],
            fundamentals: ['Digital Electronics', 'Microprocessors', 'Embedded C', 'Hardware-Software Interface'],
            basicNeeds: ['Good Laptop', 'Development Boards (Arduino, STM32)', 'Multimeter', 'Soldering Kit'],
            scopeIndia: 'High demand in Automotive, Consumer Electronics, Medical Devices',
            salary: '₹6-15 LPA (Freshers), ₹20-40 LPA (5+ years)',
            requirements: ['B.Tech ECE/EEE', 'Hands-on projects', 'Certifications'],
            companies: ['Texas Instruments', 'NXP Semiconductors', 'Bosch', 'Tata Elxsi']
        },
        // Add more templates for other domains...
    };
    
    return templates[domainName] || {
        skills: ['Core Skills', 'Advanced Skills', 'Tools & Technologies'],
        fundamentals: ['Subject 1', 'Subject 2', 'Subject 3'],
        basicNeeds: ['Laptop', 'Software Tools', 'Internet'],
        scopeIndia: 'Good scope in India',
        salary: '₹5-12 LPA',
        requirements: ['Relevant Degree', 'Projects', 'Certifications'],
        companies: ['Various Companies']
    };
}

// DOM elements
const pages = {
    welcome: document.getElementById('welcomePage'),
    login: document.getElementById('loginPage'),
    mainForm: document.getElementById('mainFormPage'),
    domains: document.getElementById('domainsPage'),
    domainDetails: document.getElementById('domainDetailsPage')
};

// Page navigation
function showPage(pageName) {
    Object.values(pages).forEach(page => page.classList.remove('active'));
    pages[pageName].classList.add('active');
}

function goToWelcome() { showPage('welcome'); }
function goToLogin() { showPage('login'); }
function goToMainForm() { showPage('mainForm'); }
function goToDomains() { showPage('domains'); }

// Login form
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    userData.name = document.getElementById('name').value;
    userData.dob = document.getElementById('dob').value;
    
    // Set DOB range
    const today = new Date();
    const minDate = new Date(1970, 0, 1);
    const maxDate = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());
    document.getElementById('dob').max = maxDate.toISOString().split('T')[0];
    document.getElementById('dob').min = minDate.toISOString().split('T')[0];
    
    goToMainForm();
});

// Form handling
document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function() {
        const step = this.dataset.step || this.dataset.value;
        const currentStep = document.querySelector('.step.active');
        
        if (currentStep.id === 'qualificationStep') {
            userData.qualification = step;
            document.getElementById('degreeStep').classList.add('active');
            currentStep.classList.remove('active');
            updateProgress(25);
            document.getElementById('formTitle').textContent = 'Select Degree Type';
        } else if (currentStep.id === 'degreeStep') {
            userData.degreeType = step;
            document.getElementById('branchStep').classList.add('active');
            currentStep.classList.remove('active');
            updateProgress(50);
            document.getElementById('formTitle').textContent = 'Select Your Branch';
        } else if (currentStep.id === 'branchStep') {
            userData.branch = step;
            document.getElementById('industryStep').classList.add('active');
            currentStep.classList.remove('active');
            updateProgress(75);
            document.getElementById('formTitle').textContent = 'Select Industry';
        } else if (currentStep.id === 'industryStep') {
            userData.industry = step;
            document.getElementById('confirmStep').classList.add('active');
            currentStep.classList.remove('active');
            updateProgress(100);
            document.getElementById('formTitle').textContent = 'Confirm Selection';
            showSummary();
        }
    });
});

function updateProgress(percent) {
    document.getElementById('progress').style.width = percent + '%';
}

function showSummary() {
    const summary = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <h3>Hi ${userData.name}!</h3>
            <p>Your Selection:</p>
        </div>
        <div style="background: white; padding: 1.5rem; border-radius: 15px; margin-bottom: 1rem;">
            <strong>Qualification:</strong> ${userData.qualification}<br>
            <strong>Degree:</strong> ${userData.degreeType}<br>
            <strong>Branch:</strong> ${userData.branch}<br>
            <strong>Industry:</strong> ${userData.industry}
        </div>
    `;
    document.getElementById('summaryContent').innerHTML = summary;
}

function showDomains() {
    const domains = careerDomains[userData.branch]?.[userData.industry] || [];
    const title = `${userData.branch} - ${userData.industry} Career Domains`;
    document.getElementById('domainsTitle').textContent = title;
    
    const grid = document.getElementById('domainsGrid');
    grid.innerHTML = domains.map(domain => `
        <div class="domain-card" onclick="showDomainDetails('${domain.name}')">
            <h3>${domain.name}</h3>
            <p>Explore career opportunities</p>
        </div>
    `).join('');
    
    goToDomains();
}

function showDomainDetails(domainName) {
    const domain = careerDomains[userData.branch][userData.industry].find(d => d.name === domainName);
    document.getElementById('domainName').textContent = domainName;
    
    const details = domain.details;
    const infoHTML = `
        <div class="info-section">
            <h4><i class="fas fa-star"></i>Key Skills to Learn</h4>
            <ul>${details.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
        </div>
        <div class="info-section">
            <h4><i class="fas fa-book"></i>Fundamentals</h4>
            <ul>${details.fundamentals.map(fund => `<li>${fund}</li>`).join('')}</ul>
        </div>
        <div class="info-section">
            <h4><i class="fas fa-tools"></i>Basic Requirements</h4>
            <ul>${details.basicNeeds.map(need => `<li>${need}</li>`).join('')}</ul>
        </div>
        <div class="info-section">
            <h4><i class="fas fa-chart-line"></i>Future Scope in India</h4>
            <p style="color: #333; padding-left: 2rem;">${details.scopeIndia}</p>
        </div>
        <div class="info-section">
            <h4><i class="fas fa-rupee-sign"></i>Salary & Growth</h4>
            <p style="color: #333; padding-left: 2rem;">${details.salary}</p>
        </div>
        <div class="info-section">
            <h4><i class="fas fa-briefcase"></i>Requirements</h4>
            <ul>${details.requirements.map(req => `<li>${req}</li>`).join('')}</ul>
        </div>
        <div class="info-section">
            <h4><i class="fas fa-building"></i>Top Companies in India</h4>
            <ul>${details.companies.map(company => `<li>${company}</li>`).join('')}</ul>
        </div>
    `;
    
    const booksHTML = `
        <div class="info-section">
            <h4><i class="fas fa-book-open"></i>Recommended Books</h4>
            <div class="books-grid">
                ${getBooks(domainName).map(book => `
                    <div class="book-card">
                        <strong>${book.title}</strong><br>
                        <small>by ${book.author}</small>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('domainInfo').innerHTML = infoHTML;
    document.getElementById('booksSection').innerHTML = booksHTML;
    
    showPage('domainDetails');
}

function getBooks(domainName) {
    const books = {
        'Embedded Systems Developer': [
            { title: 'The Embedded Systems Design', author: 'Steve Heath' },
            { title: 'Programming Embedded Systems', author: 'Michael Barr' },
            { title: 'Embedded C Programming', author: 'Mark Siegesmund' },
            { title: 'Making Embedded Systems', author: 'Elecia White' },
            { title: 'Real-Time Embedded Systems', author: 'Xiaocong Fan' },
            { title: 'ARM Cortex-M Microcontrollers', author: 'Joseph Yiu' }
        ]
    };
    return books[domainName] || [
        { title: 'Domain Specific Book 1', author: 'Author Name' },
        { title: 'Domain Specific Book 2', author: 'Author Name' }
    ];
}

// Logo animation
function initLogoAnimation() {
    const canvas = document.getElementById('logoCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    
    let time = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Two figures walking
        ctx.save();
        ctx.translate(canvas.width/2, canvas.height/2);
        
        // Figure 1
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(-30, -30, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(-35, -15, 10, 30);
        ctx.fillRect(-40, 10, 20, 15);
        
        // Figure 2
        ctx.fillStyle = '#ff6b6b';
        ctx.beginPath();
        ctx.arc(30, -30, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(25, -15, 10, 30);
        ctx.fillRect(20, 10, 20, 15);
        
        // Path
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-60, 80);
        ctx.lineTo(60, 80 + Math.sin(time * 0.05) * 5);
        ctx.stroke();
        
        ctx.restore();
        time++;
        requestAnimationFrame(animate);
    }
    animate();
}

// Motivational quotes
const quotes = [
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Your career is a marathon, not a sprint.",
    "Dream big, work hard, stay focused.",
    "The only way to do great work is to love what you do."
];

function changeQuote() {
    const quoteText = document.getElementById('quoteText');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLogoAnimation();
    setInterval(changeQuote, 5000);
    
    // Set DOB constraints
    const dobInput = document.getElementById('dob');
    const today = new Date();
    const minDate = new Date(1970, 0, 1);
    const maxDate = new Date(today.getFullYear() - 10, today.getMonth(), today.getDate());
    dobInput.max = maxDate.toISOString().split('T')[0];
    dobInput.min = minDate.toISOString().split('T')[0];
    
    // Add click animations
    document.querySelectorAll('.premium-btn, .option-card, .domain-card').forEach(el => {
        el.addEventListener('click', function(e) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});
