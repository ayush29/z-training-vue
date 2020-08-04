package com.ztraining.reviews.api;

import com.ztraining.reviews.model.Comment;
import com.ztraining.reviews.model.Review;
import com.ztraining.reviews.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.net.MalformedURLException;
import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8081" })
@RestController
public class ReviewController {
    private final ReviewService reviewService;

    @Autowired
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @PostMapping("/reviews")
    public void addReview(@RequestBody Review review) {
        int ret = reviewService.addReview(review);
    }

    @GetMapping("/reviews")
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    @GetMapping("/reviews/sort/{option}")
    public List<Review> getAllSortedReviews(@PathVariable("option") String option) {
//        return reviewService.getAllSortedReviews(option);
        return reviewService.getAllSortedPageReviews(option, 1);
    }

    @GetMapping("/reviews/sort/{option}/{pageNum}")
    public List<Review> getAllSortedPageReviews(@PathVariable("option") String option, @PathVariable("pageNum") int pageNum) {
        return reviewService.getAllSortedPageReviews(option, pageNum);
    }

    @PostMapping(path = "/reviews/comment/{id}")
    public void addComment(@PathVariable("id") UUID id, @RequestBody Comment comment) throws MalformedURLException {
        int ret = reviewService.addComment(id, comment);
    }

    @GetMapping(path = "/reviews/comment/{id}")
    public List<Comment> getComments(@PathVariable("id") UUID id) {
        return reviewService.getComments(id);
    }

    @PostMapping(path = "/reviews/like/{id}")
    public int addComment(@PathVariable("id") UUID id) {
        return reviewService.addLike(id);
    }
}
