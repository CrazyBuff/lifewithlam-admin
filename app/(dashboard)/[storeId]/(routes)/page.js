import prismadb from "@/lib/prismadb";

const DashboardPage =  async ({ params }) => {
    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeid
        }
    })
    
    return (
        <div>
            Active Store: {store?.name}
        </div>
    )
}

export default DashboardPage;