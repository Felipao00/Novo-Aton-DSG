// JavaScript para a página de termos
document.addEventListener('DOMContentLoaded', function() {
    // Menu hamburger para mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Navegação suave entre seções
    const termsNavLinks = document.querySelectorAll('.terms-nav-link');
    
    termsNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Atualiza link ativo
                termsNavLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll suave para a seção
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Atualiza link ativo ao rolar
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 150;
        const termsSections = document.querySelectorAll('.terms-section');
        
        termsSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                termsNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Efeito de destaque nos termos
    const termsHeaders = document.querySelectorAll('.terms-section h2, .terms-section h3');
    
    termsHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.style.color = this.style.color === 'var(--secondary)' ? '' : 'var(--secondary)';
            this.style.transition = 'color 0.3s ease';
        });
    });
    
    // Botão de impressão (opcional)
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir Termos';
    printButton.className = 'btn-secondary';
    printButton.style.marginTop = '20px';
    printButton.addEventListener('click', () => window.print());
    
    const termsAcceptance = document.querySelector('.terms-acceptance');
    if (termsAcceptance) {
        termsAcceptance.appendChild(printButton);
    }

// JavaScript para a página de termos
document.addEventListener('DOMContentLoaded', function() {
    // Menu hamburger para mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Navegação suave entre seções
    const termsNavLinks = document.querySelectorAll('.terms-nav-link');
    
    termsNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Atualiza link ativo
                termsNavLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll suave para a seção
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Atualiza link ativo ao rolar
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 150;
        const termsSections = document.querySelectorAll('.terms-section');
        
        termsSections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                termsNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Efeito de destaque nos termos
    const termsHeaders = document.querySelectorAll('.terms-section h2, .terms-section h3');
    
    termsHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.style.color = this.style.color === 'var(--secondary)' ? '' : 'var(--secondary)';
            this.style.transition = 'color 0.3s ease';
        });
    });
    
    // Botão de impressão (opcional)
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir Termos';
    printButton.className = 'btn-secondary';
    printButton.style.marginTop = '20px';
    printButton.addEventListener('click', () => window.print());
    
    const termsAcceptance = document.querySelector('.terms-acceptance');
    if (termsAcceptance) {
        termsAcceptance.appendChild(printButton);
    }
})});