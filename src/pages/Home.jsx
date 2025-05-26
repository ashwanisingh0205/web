import React from 'react'
import Image from '../components/global/Image'
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
export default function Home() {
   const images = [
    
    "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/03/STEAG.jpg",
    "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/03/STEAG.jpg",
    "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/03/STEAG.jpg",
    "https://i.cdn.newsbytesapp.com/images/l83920240115112236.jpeg",
    "https://i.cdn.newsbytesapp.com/images/l83920240115112236.jpeg",
    "https://i.cdn.newsbytesapp.com/images/l83920240115112236.jpeg",
    "https://i.cdn.newsbytesapp.com/images/l83920240115112236.jpeg",
    "https://i.cdn.newsbytesapp.com/images/l83920240115112236.jpeg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/03/STEAG.jpg",
    "https://kolkata24x7.in/wp-content/uploads/2023/12/Army-2-1.jpg",
    "https://kolkata24x7.in/wp-content/uploads/2023/12/Army-2-1.jpg",
    "https://kolkata24x7.in/wp-content/uploads/2023/12/Army-2-1.jpg",
    "https://kolkata24x7.in/wp-content/uploads/2023/12/Army-2-1.jpg",
    "https://kolkata24x7.in/wp-content/uploads/2023/12/Army-2-1.jpg",
    "https://notopedia-uploads.s3.us-east-2.amazonaws.com/bulletin_board/202403190807572126.jpg",
    "https://notopedia-uploads.s3.us-east-2.amazonaws.com/bulletin_board/202403190807572126.jpg",
    "https://th-i.thgim.com/public/incoming/irl072/article67969466.ece/alternates/FREE_1200/IMG_BL19_army_2_1_V4CI9V6P.jpg",
    "https://th-i.thgim.com/public/incoming/irl072/article67969466.ece/alternates/FREE_1200/IMG_BL19_army_2_1_V4CI9V6P.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://th-i.thgim.com/public/incoming/irl072/article67969466.ece/alternates/FREE_1200/IMG_BL19_army_2_1_V4CI9V6P.jpg",
    "https://th-i.thgim.com/public/incoming/irl072/article67969466.ece/alternates/FREE_1200/IMG_BL19_army_2_1_V4CI9V6P.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://images.tv9bangla.com/wp-content/uploads/2024/03/Large-Image-Indian-Army-3.jpg",
    "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/03/STEAG.jpg",
    
  ];
  return (
    <div className='flex h-screen w-full items-start'>
            <div className='relative w-1/2 h-full flex flex-col'>
            <ThreeDMarquee
        className="pointer-events-none absolute inset-0 h-full w-full"
        images={images}
      />
            </div>
      
   
      </div>

  );

}
