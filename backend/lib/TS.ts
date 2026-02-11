
export interface AppError extends Error {
  status?: number;
}
interface Recipe {
  ingrediend_id: string;
  amount: number;
}


export interface IceCream {
    id?: string;
    name: string;
    shape_id: string;
    size: number;
    receipe: Recipe[];
    description: string;
    price: number;
    owner_id: string;
    loves: number;
}

// Request


// Response

export interface ApiResponse<T> {
    success: boolean
    results?:number
    data?: T
    message?: string
}
