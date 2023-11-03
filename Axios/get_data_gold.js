//금융위원회_일반상품시세정보
//https://www.data.go.kr/data/15094805/openapi.do#/API%20%EB%AA%A9%EB%A1%9D/

const axios = require('axios');
/**
 * 금 시세 get
 */
const getGoldPriceInfo = async() => {
    const url = "https://apis.data.go.kr/1160100/service/GetGeneralProductInfoService/getGoldPriceInfo"
    const response = await axios.get(url,{
        params:{
            serviceKey : 'kyjLjiF6ByL23YdtD/OWmhj8E10dHcJdRq+F4/88R8OjZpn0snD+Jxy4sLDO60bNg182qXLjaMlZGly2dxdCTA==',
            pageNo : 1,
            numOfRows : 10,
            resultType : 'json'
        }
    });
    console.log(response.data.response.body.items.item)
  }
//   getGoldPriceInfo()

/**
 * 석유 시세 get
 */
const getOilPriceInfo = async() => {
    const url = "https://apis.data.go.kr/1160100/service/GetGeneralProductInfoService/getOilPriceInfo"
    const response = await axios.get(url,{
        params:{
            serviceKey : 'kyjLjiF6ByL23YdtD/OWmhj8E10dHcJdRq+F4/88R8OjZpn0snD+Jxy4sLDO60bNg182qXLjaMlZGly2dxdCTA==',
            pageNo : 1,
            numOfRows : 10,
            resultType : 'json'
        }
    });
    console.log(response.data.response.body.items.item)
  }

//   getOilPriceInfo()
const GetGeneralProductInfoService = async() => {
    const url = "https://apis.data.go.kr/1160100/service/GetGeneralProductInfoService/getCertifiedEmissionReductionPriceInfo"
    const response = await axios.get(url,{
        params:{
            serviceKey : 'kyjLjiF6ByL23YdtD/OWmhj8E10dHcJdRq+F4/88R8OjZpn0snD+Jxy4sLDO60bNg182qXLjaMlZGly2dxdCTA==',
            pageNo : 1,
            numOfRows : 10,
            resultType : 'json'
        }
    });
    console.log(response)
  }
//   GetGeneralProductInfoService()