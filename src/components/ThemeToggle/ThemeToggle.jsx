import { useTheme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.scss'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'light'

  return (
    <li className={styles.themeToggle}>
      <input
        id={styles.hideCheckbox}
        type="checkbox"
        checked={isDark}
        onChange={toggleTheme}
      />

      <label htmlFor={styles.hideCheckbox} className={styles.toggle}>
        <span className={styles.toggleButton}>
          <span className={`${styles.crater} ${styles.crater1}`}></span>
          <span className={`${styles.crater} ${styles.crater2}`}></span>
          <span className={`${styles.crater} ${styles.crater3}`}></span>
          <span className={`${styles.crater} ${styles.crater4}`}></span>
          <span className={`${styles.crater} ${styles.crater5}`}></span>
          <span className={`${styles.crater} ${styles.crater6}`}></span>
          <span className={`${styles.crater} ${styles.crater7}`}></span>
        </span>

        <span className={`${styles.star} ${styles.star1}`}></span>
        <span className={`${styles.star} ${styles.star2}`}></span>
        <span className={`${styles.star} ${styles.star3}`}></span>
        <span className={`${styles.star} ${styles.star4}`}></span>
        <span className={`${styles.star} ${styles.star5}`}></span>
        <span className={`${styles.star} ${styles.star6}`}></span>
        <span className={`${styles.star} ${styles.star7}`}></span>
        <span className={`${styles.star} ${styles.star8}`}></span>
      </label>
    </li>
  )
}

export default ThemeToggle