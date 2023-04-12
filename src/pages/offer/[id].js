import { OfferFooter } from "../../OfferFooter"
import { OfferHeader } from "../../OfferHeader"
import jobOffers from "../../../json/data.json";

export async function getStaticPaths() {

  const ids = jobOffers.map((offer) => offer.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));  
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const offerInfo = jobOffers.find((offer) => offer.id == context.params.id); 
  console.log(offerInfo)
  console.log(context.params.id)
  return {
    props: {
      offerInfo,
    },
  };
};

export default function JobOffering({ offerInfo }) {
  return (
    <>
      <h1>{offerInfo.company}</h1>
      <OfferHeader logo={offerInfo.logo} website={offerInfo.website} company={offerInfo.company}/>
      <p>footer</p>
      <OfferFooter position={offerInfo.position} company={offerInfo.company}/>
    </>
  )
}