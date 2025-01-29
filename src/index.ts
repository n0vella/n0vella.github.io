function main() {
  // apply flipped class to flipped cards
  const cards = document.querySelectorAll<HTMLDivElement>('.flip')

  for (const card of cards) {
    card.addEventListener('mouseover', () => setTimeout(() => card.classList.add('flipped'), 1))
    card.addEventListener('mouseleave', () => card.classList.remove('flipped'))
  }
}

document.addEventListener('DOMContentLoaded', main)
