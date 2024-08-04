import Link from "next/link";
import { categories } from "@/constants/strings";
import { HiFilter } from "react-icons/hi";
import styles from "@/module/Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته‌بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      {Object.keys(categories).map((i, index) => (
        <Link
          key={index}
          href={{
            pathname: "/buy-residential",
            query: { category: i },
          }}
        >
          {categories[i]}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
