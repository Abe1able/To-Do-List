export default function interactive(e) {
    if (e.target.checked) {
      e.target.nextElementSibling.classList.add('complete');
      console.log("complete");
    } else {
      e.target.nextElementSibling.classList.remove('complete');
      console.log("incomplete");
    }
  }