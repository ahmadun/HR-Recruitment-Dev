import { AuthHeader, AuthHeaderForm } from "./AuthHeader";
import BaseApi from "./axios";

export const getApplication = async (id) => {
  const { data } = await BaseApi.get(`/application/${id}`, {
    headers: AuthHeader(),
  });
  return data;
};

export const getApplicationById = async (id) => {
  const { data } = await BaseApi.get(`/application/${id}`);
  return data;
};

export const getApplicationByApplicant = async (nik) => {
  const { data } = await BaseApi.get(`/application-applicant/${nik}`, {
    headers: AuthHeader(),
  });
  return data;
};

export const getAnnoucement = async (nik, no_test) => {
  const { data } = await BaseApi.get(
    `/application-announcement/${nik}/'${no_test}'`,
    {
      headers: AuthHeader(),
    }
  );
  return data;
};

export const getAnnouncementByAtten = async (nik, no_test) => {
  const { data } = await BaseApi.get(
    `/application-announcement-atten/${nik}/'${no_test}'`,
    {
      headers: AuthHeader(),
    }
  );
  return data;
};

export const postApplication = async (formData) => {
  const { data } = await BaseApi.post("/application", formData, {
    headers: AuthHeaderForm(),
  });
  return data;
};

export const getApplicationByApplicantJob = async (nik, job_id) => {
  const { data } = await BaseApi.get(
    `/application-applicant/${nik}/${job_id}`,
    {
      headers: AuthHeader(),
    }
  );
  return data;
};

export const putApplicationByJob = async (id, formData) => {
  const { data } = await BaseApi.put(`/application-job/${id}`, formData, {
    headers: AuthHeader(),
  });
  return data;
};

export const putApplicationByAtten = async (datas) => {
  const { data } = await BaseApi.put(
    `/application-atten/${datas.no_test}`,
    datas.row,
    {
      headers: AuthHeader(),
    }
  );
  return data;
};
