window.onload = function() {
    let cards = document.querySelectorAll('.flex-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseover', function(e) {
            this.classList.add('card-highlight');
        })
        card.addEventListener('mouseout', function(e) {
            this.classList.remove('card-highlight');
        })
    })

}

