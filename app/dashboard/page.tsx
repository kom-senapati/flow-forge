
function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-2">
          Overview of your recent activity, stats, and key metrics.
        </p>
      </header>

      {/* Stats Overview */}
      <section className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">Total Projects</h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        {/* Card 2 */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">Issues Resolved</h2>
          <p className="text-2xl font-bold mt-2">48</p>
        </div>

        {/* Card 3 */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">PRs Reviewed</h2>
          <p className="text-2xl font-bold mt-2">25</p>
        </div>

        {/* Card 4 */}
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <h2 className="text-sm font-medium text-muted-foreground">Notifications</h2>
          <p className="text-2xl font-bold mt-2">3</p>
        </div>
      </section>

      {/* Activity Feed or Other Widgets */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-card p-6 rounded-lg shadow border border-border">
          <p className="text-sm text-muted-foreground">
            No recent activity yet. Your latest updates will appear here.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;
