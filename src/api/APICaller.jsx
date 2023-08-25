

const BASE_URL = "http://localhost:8080/api/"; 
const PEXELS_URL = "pexels/"; 
const PRODUCT_URL = "product/"; 

const GET = "GET"; 
const DELETE = "DELETE";
const PUT = "PUT";
const POST = "POST";


/*const [apiData, setApiData] = useState(null);
    useEffect(() => {
        //fetch(apiUrl, { mode : "no-cors"})
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Fehler beim API-Aufruf");
                }
                return response.json();
            })
            .then(data => {
                setApiData(data);
                console.log(data);
            })
            .catch(error => {
                console.error(error); 
            });
    }, []);*/



function createApiUrl(base_url=BASE_URL, endpoint, pathVariable=null, requestParams=[]) {
    let str = base_url + endpoint + (pathVariable ? pathVariable : ""); 

    if(requestParams) {
        str += "?";
        for(let i = 0; i < requestParams.length; i++) {
            str = str + requestParams[0].join("=");
            if(i+1 < requestParams.length) {
                str = str + "&"; 
            }
        }
    }

    return str; 
}



async function apiCall(apiUrl="", method = GET, body = null) {
    

    try {

        //set requestOptions, including headers and body
        const requestOptions = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        }
        
        const response = await fetch(apiUrl, requestOptions);

        if(!response.ok) {
            throw new Error("Fehler bei Aufruf");
        }

        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}




export async function getAllProducts() {
    const apiUrl = createApiUrl(undefined, PRODUCT_URL); 
    console.log("all " + apiUrl);

    const apiData = await apiCall(apiUrl); 
    console.log(apiData);
    return apiData; 
}

export async function getOneProduct(id) {
    const apiUrl = createApiUrl(undefined, PRODUCT_URL, id); 
    console.log(apiUrl);

    const apiData = await apiCall(apiUrl);
    console.log(apiData);
    return apiData;
}

export async function deleteOneProduct(id) {
    //const apiUrl = createApiUrl({ endpoint: product_url }, { pathVariable: Number(id) }); 
    const apiUrl = createApiUrl(undefined, PRODUCT_URL, Number(id), undefined); 

    const apiData = await apiCall(apiUrl, DELETE);

    return apiData; 
}