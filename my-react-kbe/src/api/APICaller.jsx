

const BASE_URL = "http://localhost:8080/api/"; 
const PEXELS_URL = "pexels/"; 
const PRODUCT_URL = "product/"; 

const GET = "GET"; 
const DELETE = "DELETE";
const PUT = "PUT";
const POST = "POST";


function createApiUrl(base_url=BASE_URL, endpoint, pathVariable=null, requestParams=[]) {
    let str = base_url + endpoint + (pathVariable ? pathVariable : ""); 

    if(requestParams) {
        //str += "?";
        for(let i = 0; i < requestParams.length; i++) {
            if(i===0) {
                str += "?";
            }
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
        //todo throw error! but catch in code!
        //throw error;
    }
}



export async function getProduct(id) {
    const apiUrl = createApiUrl(undefined, PRODUCT_URL, id); 
    console.log(apiUrl);

    const apiData = await apiCall(apiUrl);
    console.log(apiData);
    return apiData;
}

export async function getAllProducts() {
    const apiUrl = createApiUrl(undefined, PRODUCT_URL); 
    console.log("all " + apiUrl);

    const apiData = await apiCall(apiUrl); 
    console.log(apiData);
    return apiData; 
}


export async function createProduct(product) {
    const apiUrl = createApiUrl(undefined, PRODUCT_URL);
    console.log("create " + apiUrl);

    const apiData = await apiCall(apiUrl, POST, product); 
    console.log(apiData); 
    return apiData; 
}

export async function deleteProduct(id) {
    //const apiUrl = createApiUrl({ endpoint: product_url }, { pathVariable: Number(id) }); 
    const apiUrl = createApiUrl(undefined, PRODUCT_URL, Number(id), undefined); 
    console.log("del " + apiUrl);

    const apiData = await apiCall(apiUrl, DELETE);
    console.log(apiData); 

    return apiData; 
}

// todo delete All Products by User / Filter / anything like that? 



export async function updateProduct(id, requestParams) {
    console.log("update " + apiUrl);

    // requestParams = [["varname": "value"], [...], ...]
    const apiUrl = createApiUrl(undefined, PRODUCT_URL, id, requestParams); 

    const apiData = await apiCall(apiUrl, PUT);
    console.log(apiData); 

    return apiData; 
}


export async function getImage(prompt) {
    const apiUrl = createApiUrl(undefined, PEXELS_URL, prompt); 
    console.log("getim " + apiUrl);

    const apiData = await apiCall(apiUrl); 
    console.log(apiData); 

    return apiData; 
}


export async function getRandomImage() {
    const apiUrl = createApiUrl(undefined, PEXELS_URL); 
    console.log("getran " + apiUrl);

    const apiData = await apiCall(apiUrl); 
    console.log(apiData); 

    return apiData; 
}