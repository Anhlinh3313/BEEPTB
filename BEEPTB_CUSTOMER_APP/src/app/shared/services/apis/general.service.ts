import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MsgService } from '../locals/msg-message.service';

export class GeneralService extends BaseService {
  constructor(protected http: HttpClient,
    protected alertService: MsgService,
    protected apiUrl: string,
    protected apiName: string) {
    super(http, alertService, apiUrl, apiName)
  }

  async getAll(cols?: string) {
    if (!cols)
      cols = "";

    let res = await this.get(`GetAll?cols=${cols}`);
    if (!this.isValidResponse(res)) return;
    return res.data as any[];
  }

  async getPaging(model: any) {

    let res = await this.post("GetPaging", model);
    if (!this.isValidResponse(res)) return;
    return res.data as any[];
  }

  // async getAllSelectModel() {
  //   let data = await this.getAll();

  //   let selectModel: SelectModel[] = [
  //     { value: null, label: "Tất cả", data: null }
  //   ];

  //   data.forEach(item => {
  //     selectModel.push({ value: item.id, label: item.name, data: item })
  //   });

  //   return selectModel;
  // }

  // async getAllSelectModelWithoutSelectAll() {
  //   let data = await this.getAll();

  //   let selectModel: SelectModel[] = [];

  //   data.forEach(item => {
  //     selectModel.push({ value: item.id, label: item.name, data: item })
  //   });

  //   return selectModel;
  // }

  async getByID(id: any, cols: string = "") {
    let params = new HttpParams();
    params = params.append("id", id);
    params = params.append("cols", cols);

    let res = await this.getWithParams("Get", params);
    if (!this.isValidResponse(res)) return;
    return res.data;
  }

  async create(model: any) {
    for (const key in model) {
      if (!model[key])
        delete model[key]
    }

    let res = await this.post("Create", model);
    if (!this.isValidResponse(res)) return;
    return res.data;
  }

  async update(model: any) {
    let res = await this.post("Update", model);
    if (!this.isValidResponse(res)) return;
    return res.data;
  }

  async delete(model: any) {
    let res = await this.post("Delete", model);
    if (!this.isValidResponse(res)) return;
    return res.data;
  }
}
