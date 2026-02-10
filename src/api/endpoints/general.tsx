import { ApiResponse } from "models";
import config from "../../config";

const getRequest = async (endpoint: string): Promise<ApiResponse<any>> => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
    .then((response) => response.json())
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: res.message,
      };
    }
    return {
      success: false,
      data: [],
      message: res.message,
    };
  } catch (error: any) {
    let errorMessage: string = "";
    if (error instanceof TypeError) {
      errorMessage =  error.message;
    } else {
      // Handle other potential errors if needed
      errorMessage = error;
    }
    return {
      success: false,
      data: [],
      message: errorMessage,
    };
  }
};

const postRequest = async (endpoint: string, payload: any) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    }).then((response) => response.json());
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: res.message,
      };
    }
    return {
      success: false,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const putRequest = async (endpoint: string, payload: any) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    }).then((response) => response.json());
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: res.message,
      };
    }
    return {
      success: false,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const deleteRequest = async (endpoint: string, payload: any) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    })
    .then((response) => response.json())
    if (res.success) {
      return {
        success: true,
        data: res.data,
        message: res.message,
      };
    }
    return {
      success: false,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      success: false,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const general = {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest
};

export default general;
