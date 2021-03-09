const repos = document.querySelectorAll('.repo');

repos.forEach(repo => {
    repo.addEventListener('mouseover', () => {
      console.log(repo.childNodes[1].classList)
      repo.childNodes[1].classList.add('img-blur');
    });

    repo.addEventListener('mouseout', () => {
      console.log(repo.childNodes[1].classList)
      repo.childNodes[1].classList.remove('img-blur');
    });
  });
