export const SettingsSection = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
  <div className="grid md:grid-cols-[250px,1fr] gap-8 py-8 border-b last:border-0">
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);