import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(()=>import('../../pages/HomePage/HomePage'))
const TravelCardsPage = lazy(()=> import('../../pages/TravelCardsPage'))
const TravelCardDetailsPage =lazy(()=>import('../../pages/TravelCardDetailsPage'))
const CardFeature = lazy(()=>import('../CardFeatures/CardFeatures'))
const CardReviews = lazy(()=>import('../CardReviews/CardReviews'))
const NotFoundPage = lazy(()=>import('../../pages/NotFoundPage'))

export default function App() {

  return (
    <div>
      <Navigation/>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/catalog" element={<TravelCardsPage/>}/>
          <Route path="/catalog/:id" element={<TravelCardDetailsPage/>}>
             <Route path="features" element={<CardFeature/>}/>
             <Route path="reviews" element={<CardReviews/>}/>
          </Route>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}


