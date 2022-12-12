import React from 'react';
import { useSelector } from 'react-redux';

export default function Template2() {
    const employmentState = useSelector(state => state.employment.value);
    const educationState = useSelector(state => state.education.value);
    const internshipState = useSelector(state => state.internship.value);
    const coursesState = useSelector(state => state.courses.value);
    const referencesState = useSelector(state => state.reference.value);
    const extraCurricState = useSelector(state => state.extracurrics.value);
    const languagesState = useSelector(state => state.languages.value);
    const linksState = useSelector(state => state.links.value);
    return (
        <div>
            <div></div>
        </div>
    )
}
