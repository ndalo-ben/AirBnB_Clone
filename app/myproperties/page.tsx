import PropertList from "../components/properties/PropertList"

const MyPropertiesPage = () => {
  return (
    <main className='max-w-[1500px] mx-auto px-6 pb-6'>
        <h1 className="m-6 text-2xl">My Properties</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PropertList />
        </div>
    </main>
  )
}

export default MyPropertiesPage