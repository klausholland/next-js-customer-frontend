/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomerDto } from "../models/CustomerDto";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class CustomerControllerService {
  /**
   * @param id
   * @returns CustomerDto OK
   * @throws ApiError
   */
  public static getCustomer(id: string): CancelablePromise<CustomerDto> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/customers/{id}",
      path: {
        id: id,
      },
    });
  }
  /**
   * @param id
   * @param requestBody
   * @returns CustomerDto OK
   * @throws ApiError
   */
  public static updateCustomer(
    id: string,
    requestBody: CustomerDto,
  ): CancelablePromise<CustomerDto> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/customers/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * @returns CustomerDto OK
   * @throws ApiError
   */
  public static getAllCustomers(): CancelablePromise<Array<CustomerDto>> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/customers",
    });
  }
  /**
   * @param requestBody
   * @returns CustomerDto OK
   * @throws ApiError
   */
  public static createCustomer(
    requestBody: CustomerDto,
  ): CancelablePromise<CustomerDto> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/customers",
      body: requestBody,
      mediaType: "application/json",
    });
  }
}
