import { APIRequestContext, APIResponse } from '@playwright/test';

/*
    Wrap your API calls in a service that will allow you to abstract the call logic away from your tests
    This will simplify the readability of your tests and ease test setup
*/

export class ExampleService {
    readonly request: APIRequestContext;

    readonly exampleEndpoint: string = '';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getRequestToEndpoint() : Promise<APIResponse> {
        return this.request.get(this.exampleEndpoint);
    }

    async postRequestToEndpont(param1?: string, param2?: string) {
        return this.request.post(this.exampleEndpoint, { 
            data: {
                param1: "param1" ?? "",
                param2: "param2" ?? ""
            }
        });
    }
}