import { createSelector } from 'reselect';

const selectDirectory = state => state.directory

export const sectionsSelector = createSelector(
    [selectDirectory],
    directory => directory.sections
)