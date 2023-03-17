/* tslint:disable */
/* eslint-disable */
/**
 * Dropsigner
 * <!--------------------------------------------------------------------------------------------------------------------->    <h2>Authentication</h2>    <p>   In order to call this APIs, you will need an <strong>API key</strong>. Set the API key in the header <span class=\"code\">X-Api-Key</span>:  </p>    <pre>X-Api-Key: your-app|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</pre>    <!--------------------------------------------------------------------------------------------------------------------->  <br />    <h2>HTTP Codes</h2>    <p>   The APIs will return the following HTTP codes:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">200 (OK)</strong></td>     <td>Request processed successfully. The response is different for each API, please refer to the operation's documentation</td>    </tr>    <tr>     <td><strong class=\"model-title\">400 (Bad Request)</strong></td>     <td>Syntax error. For instance, when a required field was not provided</td>    </tr>    <tr>     <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>     <td>API key not provided or invalid</td>    </tr>    <tr>     <td><strong class=\"model-title\">403 (Forbidden)</strong></td>     <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>    </tr>    <tr>     <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>     <td>API error. The response is as defined in <a href=\"#model-ErrorModel\">ErrorModel</a></td>    </tr>   </tbody>  </table>    <br />    <h3>Error Codes</h3>    <p>Some of the error codes returned in a 422 response are provided bellow*:</p>    <ul>   <li>CertificateNotFound</li>   <li>DocumentNotFound</li>   <li>FolderNotFound</li>   <li>CpfMismatch</li>   <li>CpfNotExpected</li>   <li>InvalidFlowAction</li>   <li>DocumentInvalidKey</li>  </ul>    <p style=\"font-size: 0.9em\">   *The codes shown above are the main error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning.  </p>    <!--------------------------------------------------------------------------------------------------------------------->    <br />    <h2>Webhooks</h2>    <p>   It is recomended to subscribe to Webhook events <strong>instead</strong> of polling APIs. To do so, enable webhooks and register an URL that will receive a POST request   whenever one of the events bellow occur.  </p>  <p>   All requests have the format described in <a href=\"#model-Webhooks.WebhookModel\">Webhooks.WebhookModel</a>.   The data field varies according to the webhook event type:  </p>      <table>   <thead>    <tr>     <th>Event type</th>     <th>Description</th>     <th>Payload</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">DocumentSigned</strong></td>     <td>Triggered when a document is signed.</td>     <td><a href=\"#model-Webhooks.DocumentSignedModel\">Webhooks.DocumentSignedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentApproved</strong></td>     <td>Triggered when a document is approved.</td>     <td><a href=\"#model-Webhooks.DocumentApprovedModel\">Webhooks.DocumentApprovedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentRefused</strong></td>     <td>Triggered when a document is refused.</td>     <td><a href=\"#model-Webhooks.DocumentRefusedModel\">Webhooks.DocumentRefusedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentConcluded</strong></td>     <td>Triggered when the flow of a document is concluded.</td>     <td><a href=\"#model-Webhooks.DocumentConcludedModel\">Webhooks.DocumentConcludedModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentCanceled</strong></td>     <td>Triggered when the document is canceled.</td>     <td><a href=\"#model-Webhooks.DocumentCanceledModel\">Webhooks.DocumentCanceledModel</a></td>    </tr>    <tr>     <td><strong class=\"model-title\">DocumentsCreated (v1.50.0)</strong></td>     <td>Triggered when one or more documents are created.</td>     <td><a href=\"#model-Webhooks.DocumentsCreatedModel\">Webhooks.DocumentsCreatedModel</a></td>    </tr>   </tbody>  </table>    <p>   To register your application URL and enable Webhooks, access the integrations section in your <a href=\"/private/organizations\" target=\"_blank\">organization's details page</a>.  </p>  
 *
 * OpenAPI spec version: 1.55.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ErrorModel } from '../models';
import { FileModel } from '../models';
import { UploadsUploadBytesModel } from '../models';
import { UploadsUploadBytesRequest } from '../models';
import { createReadStream, readFileSync } from 'fs';
import * as FormData from 'form-data';
/**
 * UploadApi - axios parameter creator
 * @export
 */
export const UploadApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsBytesPost: async (body?: UploadsUploadBytesRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/uploads/bytes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Api-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiUploadsPostForm: async (filename: string, filepath: any, contentType: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/uploads`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();

            // authentication ApiKey required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Api-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Api-Key"] = localVarApiKeyValue;
            }

            if (filename !== undefined && filepath !== undefined && contentType !== undefined) { 
                const stream = createReadStream(filepath)
                localVarFormParams.append('content', stream);
                localVarFormParams.append('name', filename);
                localVarFormParams.append('contentType', contentType);
            }

            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UploadApi - functional programming interface
 * @export
 */
export const UploadApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUploadsBytesPost(body?: UploadsUploadBytesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UploadsUploadBytesModel>>> {
            const localVarAxiosArgs = await UploadApiAxiosParamCreator(configuration).apiUploadsBytesPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUploadsPostForm(filename: string, filepath: any, contentType: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<FileModel>>> {
            const localVarAxiosArgs = await UploadApiAxiosParamCreator(configuration).apiUploadsPostForm(filename, filepath, contentType, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UploadApi - factory interface
 * @export
 */
export const UploadApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
         * @param {UploadsUploadBytesRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUploadsBytesPost(body?: UploadsUploadBytesRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<UploadsUploadBytesModel>> {
            return UploadApiFp(configuration).apiUploadsBytesPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
         * @summary Uploads a file by sending a multipart/form-data request
         * @param {any} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiUploadsPostForm(filename: string, filepath: any, contentType: string, options?: AxiosRequestConfig): Promise<AxiosResponse<FileModel>> {
            return UploadApiFp(configuration).apiUploadsPostForm(filename, filepath, contentType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UploadApi - object-oriented interface
 * @export
 * @class UploadApi
 * @extends {BaseAPI}
 */
export class UploadApi extends BaseAPI {
    /**
     * 
     * @summary Uploads a file by sending a JSON request with the bytes in Base 64 format.
     * @param {UploadsUploadBytesRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadApi
     */
    public async apiUploadsBytesPost(body?: UploadsUploadBytesRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<UploadsUploadBytesModel>> {
        return UploadApiFp(this.configuration).apiUploadsBytesPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * The id returned by this API should be used as paremeter to other APIs.  You may also use the location property to display a preview of the uploaded file.
     * @summary Uploads a file by sending a multipart/form-data request
     * @param {any} [file] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UploadApi
     */
    public async apiUploadsPostForm(filename: string, filepath: any, contentType: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<FileModel>> {
        return UploadApiFp(this.configuration).apiUploadsPostForm(filename, filepath, contentType, options).then((request) => request(this.axios, this.basePath));
    }
}
