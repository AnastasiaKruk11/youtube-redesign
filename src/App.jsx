import './App.css'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import ActiveItem from './components/active-item/ActiveItem';
import BottomItems from './components/bottom-items/BottomItems';
import BottomNavigation from './components/bottom-navigation/BottomNavigation';

function App() {

const items = [
    {id: 1, title: 'Funny cats', src: 'https://www.youtube.com/embed/3URtTIdnXIk', views: 9105, author: 'The Pet Collective', description: 'For the spoiling, nurturing and whole-heartedly pet-obsessed, The Pet Collective is a playground that cultivates community, promotes joyful moments, and fuels your pet lifestyle.', date: '15 Jun 2019'},
    {id: 2, title: 'Nature Scenes Narrated By David Attenborough', src: 'https://www.youtube.com/embed/7ZhdXgRfxHI', views: 5500, author: 'BBC Earth', description: 'Relax with extraordinary 4K nature footage narrated by Sir David Attenborough, the voice of natural history for over 70 years.', date: '23 July 2017'},
    {id: 3, title: 'The Incredible Scottish Highlands', src: 'https://www.youtube.com/embed/dSsubsLx2ZA', views: 1120, author: 'Our World', description: 'Narrated by Ewan McGregor, this landmark series gives a beautiful portrait of life in the Scottish Highlands, following the wildlife and people of Scotlands Wild Heart.', date: '7 May 2021'},
    {id: 4, title: 'Edward Gal | Olympia 2009', src: 'https://www.youtube.com/embed/adcsbxOmq3c', views: 112, author: 'FEI', description: 'Edward Gal & Totilas delivered an outstanding performance back at the FEI Dressage World Cup™ at London Olympia in 2009.', date: '10 Aug 2010'},
    {id: 5, title: 'Learning Frontend Development in 2025 lol', src: 'https://www.youtube.com/embed/vTuL2_4VOBA', views: 1111, author: 'Devression', description: 'Today we dive into the crucial steps you should be taking when learning frontend development. Whether you are a self-taught developer, or completing a university degree, I am sure this video will help shed some light on how you can progress faster and more efficiently.', date: '3 Jan 2025'},
    {id: 6, title: '4 Habits That Will Make You a Better Programmer', src: 'https://www.youtube.com/embed/FWyiYzgPNi4', views: 3456, author: 'WebBraces', description: 'Every developer has their own journey, but there are some key habits that can make all the difference in your growth. In this video, I’ll walk you through 4 habits that can transform your approach to coding and help you level up as a developer.', date: '3 Jun 2024'},
    {id: 7, title: 'Everyday English Conversation Practice', src: 'https://www.youtube.com/embed/henIVlCPVIY', views: 5678, author: 'English Easy Practice', description: 'In this video, you will listen to several everyday English conversation examples in real life. So you will learn English vocabulary fast and you will improve your speaking.', date: '15 May 2025'}
];

  return (
    <>
      <Header />
      <Sidebar items={items} />
      <ActiveItem item={items[Math.ceil(Math.random() * items.length)]} />
      <BottomItems items={items} />
      <BottomNavigation />
    </>
  )
}

export default App
