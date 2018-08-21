package dev.sangco.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@NoArgsConstructor
@ToString
public class TestForm {
    private String id;
    private String name;
    private List<TestTag> testTags;

    @Data
    @NoArgsConstructor
    @ToString
    public static class TestTag {
        private String id;
        private String tag;
    }
}

