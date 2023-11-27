export function api(value, page) {
  return fetch(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=39787944-43ec837227cb503858330c56a&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
