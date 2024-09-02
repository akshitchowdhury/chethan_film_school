import React from 'react'

const Gallery = () => {
    const urls = [
        "https://tentcinema.com/wp-content/uploads/2024/01/Untitled-design-8.jpg",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5294.jpg",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5261.jpg",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5216.jpg",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A5143.jpg",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4840.png",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4584-scaled.jpg",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4576.jpg",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4564.png",
        "https://tentcinema.com/wp-content/uploads/2024/02/8-1-768x432.jpg.webp",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4559.png",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4557.png",
        "https://tentcinema.com/wp-content/uploads/2023/12/RY9A4550-scaled.jpg",
        "https://tentcinema.com/wp-content/uploads/2024/02/9-1-768x432.jpg.webp"
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                {urls.map((url, index) => (
                    <div 
                        key={index} 
                        className="relative overflow-hidden"
                        style={{
                            height: `${Math.floor(Math.random() * (400 - 200 + 1) + 200)}px`
                        }}
                    >
                        <img 
                            src={url} 
                            alt={`Gallery image ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery