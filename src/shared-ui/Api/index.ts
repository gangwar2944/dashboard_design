import type { AxiosInstance, AxiosResponse } from "axios";
import axios from "axios";

export class Api {
  private static instance: Api; // Static instance for singleton
  public httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      headers: {
        Accept: "*/*",
      },
    });
  }

  // Get the singleton instance
  public static getInstance(): Api {
    if (!Api.instance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  public fetch(url: string, params = {}): Promise<AxiosResponse> {
    return this.httpClient.get(url, { params });
  }

  public deleteItem(url: string, params = {}): Promise<AxiosResponse> {
    return this.httpClient.delete(url, { params });
  }

  public create(url: string, data: unknown): Promise<AxiosResponse> {
    return this.httpClient.post(url, data);
  }

  public update(url: string, data: unknown): Promise<AxiosResponse> {
    return this.httpClient.put(url, data);
  }

  public updatePatch(url: string, data: unknown): Promise<AxiosResponse> {
    return this.httpClient.patch(url, data);
  }
}
