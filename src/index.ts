import axios from 'axios';

const DEFAULT_API_KEY = 'DEMO_KEY';

export type ApodResponse = {
  /**
   * The title of the image.
   */
  title: string;
  /**
   * Date of image. Included in response because of default values.
   */
  date: string;
  /**
   * The URL of the APOD image or video of the day.
   */
  url: string;
  /**
   * The URL for any high-resolution image for that day. Returned regardless of 'hd' param setting but will be omitted in the response IF it does not exist originally at APOD.
   */
  hdurl: string;
  /**
   * The type of media (data) returned. May either be 'image' or 'video' depending on content.
   */
  media_type: string;
  /**
   * The supplied text explanation of the image.
   */
  explanation: string;
  /**
   * The URL of thumbnail of the video.
   */
  thumbnail_url?: string;
  /**
   * The name of the copyright holder.
   */
  copyright: string;
  /**
   * The service version used.
   */
  service_version: string;
  /**
   * A dictionary describing the image_set or planet that the response illustrates, completely determined by the structured endpoint.
   */
  resource?: any;
  /**
   * A boolean reflection of the supplied option. Included in response because of default values.
   */
  concept_tags?: boolean;
  /**
   * The most relevant concepts within the text explanation. Only supplied if concept_tags is set to True.
   */
  concepts?: string;
};

const formatDate = (date: Date): string => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

export const apod = (key: string = DEFAULT_API_KEY) => (
  date: Date = new Date()
) => {
  return axios
    .get<ApodResponse>(
      `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${formatDate(
        date
      )}`
    )
    .then(res => res.data);
};
