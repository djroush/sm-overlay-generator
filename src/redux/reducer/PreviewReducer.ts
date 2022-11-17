import { defaultPreviewState } from "../state/PreviewState";

export const previewReducer = (state = defaultPreviewState, action: any) => {
  if (action.type === 'PREVIEW/persist-background') {
    return {...state, background: action.value}
  } else if (action.type === 'PREVIEW/persist-logo') {
    return {...state, logo: action.value}
  } else if (action.type === 'PREVIEW/persist-streams') {
    return {...state, streams: action.value}
  } else if (action.type === 'PREVIEW/persist-names') {
    return {...state, names: action.value}
  } else if (action.type === 'PREVIEW/persist-timers') {
    return {...state, timers: action.value}
  } else if (action.type === 'PREVIEW/persist-trackers') {
    return {...state, trackers: action.value}
  } else if (action.type === 'PREVIEW/persist-avatars') {
    return {...state, avatars: action.value}
  } else if (action.type === 'PREVIEW/persist-wins') {
    return {...state, wins: action.value}
  } else if (action.type === 'PREVIEW/persist-players') {
    return {...state, players: action.value}
  } else if (action.type === 'PREVIEW/persist-settings') {
    return {...state, settings: action.value}
  }

  return state;
};