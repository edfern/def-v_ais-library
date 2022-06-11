package org.antiguais.model.dto.stadistics;

import java.util.List;

public class StadisticsLoansMonths {
    private List<String> months;
    private List<Integer> valuesMoth;

    public StadisticsLoansMonths(List<String> months, List<Integer> valuesMoth) {
        this.months = months;
        this.valuesMoth = valuesMoth;
    }

    public List<String> getMonths() {
        return months;
    }

    public void setMonths(List<String> months) {
        this.months = months;
    }

    public List<Integer> getValuesMoth() {
        return valuesMoth;
    }

    public void setValuesMoth(List<Integer> valuesMoth) {
        this.valuesMoth = valuesMoth;
    }
}
