import styles from './PageContainer.module.scss';

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pageContainer}>
      {children}
    </div>
  )
}