import Item from "./item";

function ListItem({comics, content}){
    return (
    // <div className="pt-32 px-4 sm:px-6 lg:px-8">
      <div className="pt-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 bg-clip-text text-transparent text-center">
          {content}
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {comics.map((comic, index) => (
            <Item key={index} {...comic} />
          ))}
        </div>
      </div>
      )
}

export default ListItem;