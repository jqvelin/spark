export { HomePage as default } from '@/pages/home';

// 'use client';

// import { useState } from 'react';

// import {
//   Play,
//   Heart,
//   Download,
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   MoreHorizontal,
//   UserIcon,
//   PlayIcon,
//   HeartIcon,
//   DownloadIcon,
//   MoreHorizontalIcon,
//   SearchIcon
// } from 'lucide-react';
// import Image from 'next/image';

// import { H2, H3, Logo, P } from '@/shared/ui';
// import { Badge } from '@/shared/ui/badge';
// import { Button } from '@/shared/ui/button';
// import { Card, CardContent } from '@/shared/ui/card';
// import { Input } from '@/shared/ui/input';

// // Mock data
// const albums = [
//   {
//     id: 1,
//     title: 'FORTUNA 812',
//     artist: 'basedgod',
//     cover: '/placeholder.svg?height=200&width=200'
//   },
//   {
//     id: 2,
//     title: 'American Heart',
//     artist: 'Benson Boone',
//     cover: '/placeholder.svg?height=200&width=200'
//   },
//   {
//     id: 3,
//     title: 'Ты мой дом',
//     artist: 'Sabret',
//     cover: '/placeholder.svg?height=200&width=200'
//   },
//   {
//     id: 4,
//     title: 'SIMBA',
//     artist: 'Kizaru',
//     cover: '/placeholder.svg?height=200&width=200'
//   },
//   {
//     id: 5,
//     title: 'Жаль',
//     artist: 'Гафт',
//     cover: '/placeholder.svg?height=200&width=200'
//   },
//   {
//     id: 6,
//     title: '8/9',
//     artist: 'Блик, Yung Leo',
//     cover: '/placeholder.svg?height=200&width=200'
//   },
//   {
//     id: 7,
//     title: 'Hollow',
//     artist: 'Stray Kids',
//     cover: '/placeholder.svg?height=200&width=200'
//   }
// ];

// const songs = {
//   newMusic: [
//     {
//       id: 1,
//       title: 'Type Dangerous',
//       artist: 'Mariah Carey',
//       duration: '02:55',
//       size: '6.7 MB',
//       plays: '320k'
//     },
//     {
//       id: 2,
//       title: 'Manchild',
//       artist: 'Sabrina Carpenter',
//       duration: '03:33',
//       size: '8.2 MB',
//       plays: '320k'
//     },
//     {
//       id: 3,
//       title: 'Russian Grizzly In America',
//       artist: 'Slaughter To Prevail',
//       duration: '04:14',
//       size: '9.7 MB',
//       plays: '320k'
//     },
//     {
//       id: 4,
//       title: 'Invincible - from Kaiju No. 8',
//       artist: 'OneRepublic',
//       duration: '02:35',
//       size: '5.9 MB',
//       plays: '320k'
//     },
//     {
//       id: 5,
//       title: 'YIPPEE-KI-YAY. (feat. T-Pain)',
//       artist: 'Kesha',
//       duration: '03:32',
//       size: '8.1 MB',
//       plays: '320k'
//     }
//   ],
//   trending: [
//     {
//       id: 6,
//       title: 'Welcome Home(Cover)',
//       artist: 'Radical Face',
//       duration: '04:46',
//       size: '4.4 MB',
//       plays: '128k'
//     },
//     {
//       id: 7,
//       title: 'Blurred Lines (ft T.I. & Pharrell)',
//       artist: 'Robin Thicke',
//       duration: '04:24',
//       size: '10.1 MB',
//       plays: '320k'
//     },
//     {
//       id: 8,
//       title: 'Bloody Mary',
//       artist: 'Lady Gaga',
//       duration: '04:04',
//       size: '7.1 MB',
//       plays: '244k'
//     },
//     {
//       id: 9,
//       title: 'Wicked Game',
//       artist: 'Chris Isaak',
//       duration: '04:46',
//       size: '6.6 MB',
//       plays: '192k'
//     },
//     {
//       id: 10,
//       title: 'Mirrors',
//       artist: 'Justin Timberlake',
//       duration: '04:43',
//       size: '8.6 MB',
//       plays: '256k'
//     }
//   ],
//   bestToday: [
//     {
//       id: 11,
//       title: 'Shape of my heart',
//       artist: 'Sting',
//       duration: '04:33',
//       size: '10.4 MB',
//       plays: '320k'
//     },
//     {
//       id: 12,
//       title: 'Let Down',
//       artist: 'Radiohead',
//       duration: '04:59',
//       size: '6.9 MB',
//       plays: '192k'
//     },
//     {
//       id: 13,
//       title: 'Careless Whisper',
//       artist: 'George Michael',
//       duration: '05:03',
//       size: '11.6 MB',
//       plays: '320k'
//     },
//     {
//       id: 14,
//       title: 'Bohemian Rhapsody',
//       artist: 'Queen',
//       duration: '05:55',
//       size: '13.6 MB',
//       plays: '320k'
//     },
//     {
//       id: 15,
//       title: 'Hotel California',
//       artist: 'Eagles',
//       duration: '06:30',
//       size: '14.9 MB',
//       plays: '320k'
//     }
//   ],
//   trendingRussia: [
//     {
//       id: 16,
//       title: 'Мокрые кроссы',
//       artist: 'Скриптонит',
//       duration: '03:45',
//       size: '8.6 MB',
//       plays: '256k'
//     },
//     {
//       id: 17,
//       title: 'Малиновый закат',
//       artist: 'Клава Кока',
//       duration: '03:12',
//       size: '7.4 MB',
//       plays: '192k'
//     },
//     {
//       id: 18,
//       title: 'Пьяное солнце',
//       artist: 'Zivert',
//       duration: '03:28',
//       size: '8.0 MB',
//       plays: '244k'
//     },
//     {
//       id: 19,
//       title: 'Романс',
//       artist: 'Макс Корж',
//       duration: '04:15',
//       size: '9.8 MB',
//       plays: '320k'
//     },
//     {
//       id: 20,
//       title: 'Девочка танцуй',
//       artist: 'Artik & Asti',
//       duration: '03:55',
//       size: '9.0 MB',
//       plays: '256k'
//     }
//   ]
// };

// function AlbumCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleAlbums = 6;

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % Math.max(1, albums.length - visibleAlbums + 1));
//   };

//   const prevSlide = () => {
//     setCurrentIndex(
//       (prev) =>
//         (prev - 1 + Math.max(1, albums.length - visibleAlbums + 1)) % Math.max(1, albums.length - visibleAlbums + 1)
//     );
//   };

//   return (
//     <div className="relative">
//       <div className="flex items-center justify-between mb-4">
//         <H2>Fresh Albums</H2>
//         <div className="flex gap-2">
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={prevSlide}
//           >
//             <ChevronLeft />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={nextSlide}
//           >
//             <ChevronRight />
//           </Button>
//         </div>
//       </div>
//       <div className="overflow-hidden">
//         <div
//           className="flex transition-transform duration-300 ease-in-out gap-4"
//         >
//           {albums.map((album) => (
//             <Card
//               className="flex-1 max-w-60 h-80 cursor-pointer group"
//               key={album.id}
//             >
//               <CardContent className="p-4">
//                 <div className="relative mb-3">
//                   <Image
//                     src={album.cover || '/placeholder.svg'}
//                     alt={album.title}
//                     width={200}
//                     height={200}
//                     className="w-full aspect-square object-cover rounded-lg"
//                   />
//                   <Button
//                     size="icon"
//                     className={'absolute bottom-2 right-2 opacity-0'
//                     + ' group-hover:opacity-100 transition-opacity'}
//                   >
//                     <PlayIcon />
//                   </Button>
//                 </div>
//                 <H3 className="truncate">{album.title}</H3>
//                 <p className="text-muted-foreground truncate">{album.artist}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function SongList({ title, songs, showViewAll = true }: { title: string;
//   songs: any[];
//   showViewAll?: boolean }) {
//   return (
//     <div className="space-y-4">
//       <div className="flex items-center justify-between">
//         <H2>{title}</H2>
//         {showViewAll && (
//           <Button variant="ghost">
//             View All
//           </Button>
//         )}
//       </div>
//       <div className="space-y-2">
//         {songs.map((song, index) => (
//           <Card key={song.id} className="transition-colors group">
//             <CardContent className="p-2">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-3 flex-1 min-w-0">
//                   <div className="relative">
//                     <Button size="icon" variant="outline">
//                       <PlayIcon />
//                     </Button>
//                   </div>
//                   <div className="flex-1 min-w-0">
//                     <H3 className="truncate">{song.title}</H3>
//                     <P className="text-muted-foreground truncate">{song.artist}</P>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-4 text-sm text-muted-foreground">
//                   <span>{song.duration}</span>
//                   <span>{song.size}</span>
//                   <Badge variant="secondary">
//                     {song.plays}
//                   </Badge>
//                 </div>
//                 <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <Button size="icon" variant="ghost" >
//                     <HeartIcon  className='size-4' />
//                   </Button>
//                   <Button size="icon" variant="ghost" >
//                     <DownloadIcon  className='size-4' />
//                   </Button>
//                   <Button size="icon" variant="ghost" >
//                     <MoreHorizontalIcon className='size-4'  />
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

// function SparkMusicApp() {
//   return <div className='bg-red-400'>
//     asd
//   </div>;
// }

// export { HomePage as default } from '@/pages/home';

// const Page = () => (
//   <div className="min-h-screen text-white">
//     {/* Main Content */}
//     <main className="container mx-auto px-6 py-8 space-y-12">
//       {/* Album Carousel */}
//       <AlbumCarousel />

//       {/* Music Sections */}
//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
//         <SongList title="New Music" songs={songs.newMusic} />
//         <SongList title="Trending Worldwide" songs={songs.trending} />
//       </div>

//       <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
//         <SongList title="Best of Today" songs={songs.bestToday} />
//         <SongList title="Trending in Russia" songs={songs.trendingRussia} />
//       </div>
//     </main>
//   </div>
// );
