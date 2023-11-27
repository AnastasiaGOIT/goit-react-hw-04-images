import { useState } from 'react';
import css from './Searchbar.module.css';

export const Searchbar = () => {
  const [value, setValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      return;
    }
    onSubmit(value);
    setValue('');
  };
  const onChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={e => onSubmit}>
        <button type="submit" className={css.searchForm_button}>
          <span className="button-label">Search</span>
        </button>

        <input
          className={css.searchForm_input}
          name="input"
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
};
