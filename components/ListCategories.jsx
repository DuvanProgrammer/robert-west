import styles from "../styles/ListCat.module.css";

export default function ListCategories() {
  return (
    <div className={styles.rwListCat}>
      <ul>
        {/* Item */}
        <li>
          <div className={`rw-active ${styles.rwListCatItem}`}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Act Productivas</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={styles.rwListCatSubitem}>
            <ul>
              <li>
                <span>Casería</span>
              </li>
            </ul>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Poblados y casas</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Costas</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Costas</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Agriculturas</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Vegetación Natural</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Playas</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Cultura material</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Gente</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Pueblos</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>

        {/* Item */}
        <li>
          <div className={styles.rwListCatItem}>
            <div className={styles.rwContCheck}>
              <input type="checkbox" />
              <span>Rios y orillas de rios</span>
            </div>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11C21 5.47715 16.5228 0.999999 11 1C5.47715 1 0.999999 5.47715 1 11C1 16.5228 5.47715 21 11 21C16.5228 21 21 16.5228 21 11Z"
                stroke="#A6A6A6"
                strokeWidth="2"
              />
              <path
                d="M9.5 15L13.5 11L9.5 7"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  );
}
