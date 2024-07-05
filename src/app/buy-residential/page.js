import BuyResidentialPage from "@/template/BuyResidentialPage";

async function BuyResidential({searchParams}) {
    // این مورد تمرینی داره ولی خب چه کاریه میام از همینجا کوءری میزنم روی دیتابیس:)
  const res = await fetch("http://localhost:3000/api/profile" , {cache: "no-store"});
  const data = await res.json() 

  if(data.error) return <h3>مشکلی پیش آمده است</h3>

  let finalData = data.data;
  if(searchParams.category){
    finalData= finalData.filter(i => i.category === searchParams.category)
  }

  return <BuyResidentialPage data={finalData} />;
}

export default BuyResidential;
