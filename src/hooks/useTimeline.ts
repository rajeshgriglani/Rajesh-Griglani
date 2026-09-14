import { useState, useEffect } from 'react';
import { TimelineItem, StateExperience } from '../types/journey';
import { getTimeline, getStateExperiences } from '../api/journey';
import { TIMELINE_DATA, STATES_EXPERIENCE } from '../data/mock/journey';

export function useTimeline() {
  const [timeline, setTimeline] = useState<TimelineItem[]>(TIMELINE_DATA);
  const [states, setStates] = useState<StateExperience[]>(STATES_EXPERIENCE);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTimeline = async () => {
      setIsLoading(true);
      try {
        const [timelineRes, statesRes] = await Promise.all([
          getTimeline(),
          getStateExperiences(),
        ]);
        if (isMounted) {
          if (timelineRes.success && timelineRes.data) setTimeline(timelineRes.data);
          if (statesRes.success && statesRes.data) setStates(statesRes.data);
        }
      } catch (err: any) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchTimeline();
    return () => {
      isMounted = false;
    };
  }, []);

  return { timeline, states, isLoading, error };
}
