import Head from 'next/head';
export default function Calenderpage() {
  return (
    <div className="flex justify-center ">
    <div className="container flex justify-center align-center md:w-full sm:w-full">
    <iframe src="https://calendar.google.com/calendar/embed?src=th.islamic%23holiday%40group.v.calendar.google.com&ctz=Asia%2FBangkok"  width="800" height="600" scrolling="no"></iframe>
  

    </div>
   
  
  {/* <iframe id="iframe" title="prayerWidget" className="widget-m-top" style={{height: 358, border: '1px solid #ddd'}} scrolling="no" src="https://www.islamicfinder.org/prayer-widget/1153269/shafi/1/0/16/14"> </iframe> */}

{/* <iframe id="h2gFrame" title="islamic-calendar" style={{width: 250, height: 312, border: '1px solid #ddd'}} scrolling="no" src="https://www.islamicfinder.org/islamic-calendar/widgetGregorian?type=Hijri"> </iframe> */}

{/* <div>
<iframe src="https://calcuworld.com/calendar-calculators/islamic-calendar-converter/?iframe=1" frameBorder={0} style={{width: 250, height: 312, border: '1px solid #ddd'}}/> </div> */}


    </div>
  )
}
