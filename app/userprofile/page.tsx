import {
  SidebarProvider,
} from "@/components/ui/sidebar"

export default async function Page() {
  const res = await fetch("http://localhost:5000/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Rishabh",
    email: "rishabh@gmail.com"
  })
});

  const backendData = await res.json();

  return (
    <SidebarProvider>
      <div>This thing is working fine</div>

      <pre>{JSON.stringify(backendData, null, 2)}</pre>
    </SidebarProvider>
  );
}

// changed