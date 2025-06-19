import { useNavigate } from "react-router-dom";

function Item({id,  title, image, latestChapter, category}) {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col" 
    onClick={() => navigate(`/details/${id}`)}>
      {/* Ảnh bìa */}
      <div className="aspect-[3/4] bg-white overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Nội dung */}
      <div className="p-3 flex flex-col flex-1 justify-between min-h-36">
        <div className="space-y-1">
          <h2 className="text-base font-semibold text-gray-800 line-clamp-2"><a href={`/details/${id}`}>{title}</a></h2>
          <p className="text-sm text-gray-600"><strong>Chương:</strong> {latestChapter}</p>
          <p className="text-xs text-gray-500 italic">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
