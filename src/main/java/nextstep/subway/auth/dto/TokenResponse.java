package nextstep.subway.auth.dto;

public class TokenResponse {

    private Long id;
    private String accessToken;

    public TokenResponse() {
    }

    public TokenResponse(String accessToken) {
        this.accessToken = accessToken;
    }

    public TokenResponse(Long id, String accessToken) {
        this.id = id;
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    @Override
    public String toString() {
        return "TokenResponse{" +
            "id=" + id +
            '}';
    }
}
