import React, { useState } from 'react';
import Travel from '../components/Travel';
import getTravelData from '../components/service/travel/index';

// const travels = [
//     {id:'1', name:'한국', imgLink:'/img/KakaoTalk_20231023_165730196.jpg'},
//     {id:'2', name:'미국', imgLink:'/img/pulisic.jpg'},
//     {id:'3', name:'일본', imgLink:'/img/kaoru_mitoma.jpg'}
// ]

export default function Travels(){

  const [travelData, setTravelData] = useState([]);

  const getData = async() => {
    const travels = await getTravelData();
    setTravelData(travels);
  };
    // const name='한국'
    // const img='/img/KakaoTalk_20231023_165730196.jpg'
    return (<div className='container mt-5'>
      <button onClick={getData} className='btn btn-outline-primary'>
        여행지 데이터 불러오기
      </button>
      <hr />
      {/* <Travel name={name} img={img} />
      <Travel name={name} img={img} />
      <Travel name={name} img={img} />
      JSX에서 js코드 실행은 {}내에서 작성
        key props는 React에서 성능 이슈로 사용
        일반적인 props로 사용 불가
      */}
      {travelData.map((t) => (
        <Travel key={t.id} idn={t.id} name={t.name} img={t.imgLink} />
      ))}
    </div>);
}